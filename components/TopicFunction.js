export function TopicFunction({ operations }) {
  const topicsDetails = getTopics(operations);
  let functions = '';

  topicsDetails.forEach((t) => {
    functions += `def send${t.name}(self, id):
        topic = "${t.topic}"
        self.client.publish(topic, id)\n`
  });

  return functions;
}

function getTopics(operations) {
  let topicsDetails = [];

  operations.forEach((op) => {
    const topic = {};
    const operationId = op.id();
    topic.name = operationId.charAt(0).toUpperCase() + operationId.slice(1);
    topic.topic = op.channels()[0].address();

    topicsDetails.push(topic);
  })

  return topicsDetails;
}