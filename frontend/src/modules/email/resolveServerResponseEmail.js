 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";

function resolveServerResponseEmail(resolve) {
    setTimeout(activateResolve, 2000);
    function activateResolve() {
        const response={
            message:"<h5>Your message was sent successfully.</h5>"
        }
        const finalResponse = JSON.stringify(response);
        resolve(finalResponse);
    }
} 
