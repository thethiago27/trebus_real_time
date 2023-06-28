import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

class SQSManager {

  private sqsClient: SQSClient;
  constructor() {
    this.sqsClient = new SQSClient({
      region: "us-east-1",
      credentials: {
        accessKeyId: String(import.meta.env.VITE_AWS_ACCESS_KEY_ID),
        secretAccessKey: String(import.meta.env.VITE_AWS_SECRET_ACCESS_KEY),
      },
    });
  }

  async sendSQSMessage(message: string) {
    const params = {
      QueueUrl: String(import.meta.env.VITE_AWS_SQS_QUEUE_URL),
      MessageBody: message,
      DelaySeconds: 0,
    };

    try {
      const command = new SendMessageCommand(params);
      await this.sqsClient.send(command);
    } catch (err) {
      console.log("Error", err);
    }
  }

}

export default SQSManager;