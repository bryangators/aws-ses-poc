import {SESv2Client, SendEmailCommand} from "@aws-sdk/client-sesv2"

const client = new SESv2Client({
    region: "us-east-2",
});

const sendEmail = async () => {
    const input = {
        FromEmailAddress: "bryankristofferson@gmail.com",
        Destination: {
            ToAddresses: [
                "bryankristofferson@gmail.com",
            ]
        },
        Content: {
            Simple: {
                Subject: {
                    Data: "Test data"
                },
                Body: {
                    Text: {
                        Data: "This is the test body of the email...a magic link generated will be sent from here",
                    }
                }
            }
        }
    };

    try {
        const command = new SendEmailCommand(input);
        const response = await client.send(command);
        console.log("Email sent: ", response);
    } catch (error) {
        console.log("Error sending email:", error);
    }
};

sendEmail();



