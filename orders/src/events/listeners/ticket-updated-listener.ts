import { Listener, Subjects, TicketUpdatedEvent } from "@metal_oopa/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  queueGroupName = "orders";
  async onMessage(data: TicketUpdatedEvent["data"], msg: Message) {
    const ticket = await Ticket.findOne({
      _id: data.id,
      version: data.version - 1,
    });

    if (!ticket) {
      throw new Error("Error");
    }
    ticket.set({
      title: data.title,
      price: data.price,
    });
    await ticket.save();
    msg.ack();
  }
}
