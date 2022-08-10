import { Publisher, Subjects, TicketCreatedEvent } from "@metal_oopa/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
