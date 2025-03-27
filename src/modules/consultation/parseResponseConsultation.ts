 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";
 import { output } from "../../utils/output";

export function parseResponseConsultation(resolveValue2) {
    const response = JSON.parse(resolveValue2);
    const message = response.message;
    output(message);
}
