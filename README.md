# 0x Relay


The architecture for this relayer builds off events and separates queries from data modifications. It is event sourcing + CQRS.

Reads are extremely quick as the underlying representation can be stored elsewhere to
where the data is modified. For example, this implementation stores the read model entirely
in redis.

Event sourcing is used as the underlying persisted data structure. Unlike a flattend CRUD model,
then entire history of changes to the model is stored. This enabled greater auditability than a CRUD
flattened structure in a normal relational database. The event stream can be re-interpreted at
any time and a new projection of the events can be created, and stored in elasticsearch for example. 
One can easily analyse analytics of the underlying data, for example, mean time to cancel or fill.

```
lib
├── domain # Where the Commands and Events live
└── host # A Read model of the domain, supporting parts of the 0x Relayer Standard
```

# Commands
Commands are how the data is manipulated, a command it submitted and procssed which, after validation, results in an event.

Implemented commands:  
```
createOrder
cancelOrder
updateOrder
```

# Events
Events are the facts in the story of data (or aggregate). One can see the entire stream i.e: created, updated, updated, cancelled.

Implemented events:  
```
orderCreated
orderCancelled
orderUpdated
```

# Read model
The read model is a consumer of the events for an aggregate, when a orderUpdated event occurs, the read model updates the
projection with the new data.

# Advantages
Some work can be offloaded from the web process, which accepts orders, and processed out of band. This allows
some of the heavier tasks like signature verification to not be tied up in a web request.

Downstream systems (browsers, even other relayers) can subscribe to events and update their aggregates without having to
rely on polling.

The projection of the events can be regenerated, and reinterpreted at any time.o

Scanning the blockchain and updating orders, a good example of a background task, is simple and natural to add.

# Weaknesses
Feedback of work which was performed out of band is not immediate (since it is happening eventually), this is a 
UX/performance trade off.

# Future Work
This implementaiton uses a very simply message bus, a more robut usage of DynamoDB or AWS Kinesis or RabbitMQ
should be done for production readyness.

# Running

Test  
```
npm run test
```

Redis  
```
docker-compose up -d
```

Worker
```
npm run worker
```

Web
```
npm run web
```

Import 0xRelay.postman_collection.json into postman, Create Order, Get Order, Cancel Order requests
should be present.


## Links
https://martinfowler.com/bliki/CQRS.html  
http://udidahan.com/2009/12/09/clarified-cqrs/