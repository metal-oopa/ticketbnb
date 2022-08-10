import { Listener, Subjects, TicketCreatedEvent } from "@metal_oopa/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "orders";
  async onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    const ticket = Ticket.build({
      id: data.id,
      title: data.title,
      price: data.price,
    });
    await ticket.save();
    msg.ack();
  }
}
