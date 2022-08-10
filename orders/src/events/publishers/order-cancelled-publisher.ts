import { Subjects, Publisher, OrderCancelledEvent } from "@metal_oopa/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
