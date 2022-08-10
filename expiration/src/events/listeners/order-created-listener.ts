import {
  Subjects,
  Listener,
  OrderCreatedEvent,
  OrderStatus,
} from "@metal_oopa/common";

import { Message } from "node-nats-streaming";
import { expirationQueue } from "../../queues/queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = "expiration";

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();

    console.log(`Waiting ${delay} milliseconds to process the job`);

    expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay: delay,
      }
    );
    msg.ack();
  }
}
