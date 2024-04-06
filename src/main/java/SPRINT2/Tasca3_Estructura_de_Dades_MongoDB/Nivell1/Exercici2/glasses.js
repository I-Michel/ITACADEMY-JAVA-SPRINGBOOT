db.createCollection('glasses', {validator: {$jsonSchema: {bsonType: 'object',title: 'glasses',required: ['brand','right_prescription','left_prescription','frame','frame_color','right_glass_color','left_glass_color','supplier','price','bought_by'],properties:{brand:{bsonType: 'string'},right_prescription:{bsonType: 'double'},left_prescription:{bsonType: 'double'},frame:{enum: ['rimless', 'metal', 'plastic']},frame_color:{bsonType: 'string'},right_glass_color:{bsonType: 'string'},left_glass_color:{bsonType: 'string'},supplier:{bsonType: 'objectId'},price:{bsonType: 'double'},bought_by:{bsonType: 'array',items:{title: 'object',required: ['customer_id','shopping_date','seller'],properties:{customer_id:{bsonType: 'objectId'},shopping_date:{bsonType: 'timestamp'},seller:{bsonType: 'string'}}}}}}},autoIndexId: true});