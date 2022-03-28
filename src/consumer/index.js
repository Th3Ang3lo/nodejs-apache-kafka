import { KafkaClient, Consumer } from 'kafka-node'

const kafkaClient = new KafkaClient({
  kafkaHost: 'localhost:9092'
})

const consumer = new Consumer(kafkaClient, [{ topic: 'test' }], { autoCommit: true })

consumer.on('message', data => {
  console.log(JSON.parse(data.value))
})
