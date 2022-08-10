import { PaymentCreatedEvent, Publisher, Subjects } from "@metal_oopa/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
