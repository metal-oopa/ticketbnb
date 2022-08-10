import { Subjects, Publisher, OrderCreatedEvent } from "@metal_oopa/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
