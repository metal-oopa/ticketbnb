import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@metal_oopa/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
