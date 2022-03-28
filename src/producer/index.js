import { KafkaClient, Producer } from 'kafka-node'

import { randomUUID } from 'crypto'

import { faker } from '@faker-js/faker'

const kafkaClient = new KafkaClient({
  kafkaHost: 'localhost:9092'
})

const producer = new Producer(kafkaClient)

producer.on('ready', () => {
  const name = faker.name.findName()
  const email = faker.internet.email()

  const dataToKafka = [
    {
      topic: 'test',
      messages: JSON.stringify({
        id: randomUUID(),
        name,
        email,
      })
    }
  ]

  producer.send(dataToKafka, (error, data) => {
    console.log('created:')
    console.log(dataToKafka[0])
    console.log('\n')
  })
})
