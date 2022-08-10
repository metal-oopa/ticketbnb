import { Publisher, Subjects, TicketUpdatedEvent } from "@metal_oopa/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
