export function TopicFunction({ operations }) {
  const topicsDetails = getTopics(operations);
  let functions = "";

  topicsDetails.forEach((t) => {
    functions += `def send${t.name}(self, id):
        topic = "${t.topic}"
        self.client.publish(topic, id)\n`;
  });

  return functions;
}
function getTopics(operations) {
  const operationsCanSendTo = operations;
  let topicsDetails = [];

  operationsCanSendTo.forEach((op) => {
    const topic = {};
    const operationId = op.id();

    const channelAddress = op.channel().address();

    topic.name = operationId.charAt(0).toUpperCase() + operationId.slice(1);
    topic.topic = channelAddress;

    topicsDetails.push(topic);
  });

  return topicsDetails;
}
