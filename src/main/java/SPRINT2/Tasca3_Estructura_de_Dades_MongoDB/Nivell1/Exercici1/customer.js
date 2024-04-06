db.createCollection('customer', {validator: {$jsonSchema: {bsonType: 'object',title: 'customer',required: ['first_name','last_name','data'],properties:{first_name:{bsonType: 'string'},last_name:{bsonType: 'string'},data:{bsonType: 'object',title: 'object',required: ['address_street','address_num','address_apt','address_city','address_zip','address_country','phone','email','register_date'],properties:{address_street:{bsonType: 'string'},address_num:{bsonType: 'int'},address_apt:{bsonType: 'int'},address_city:{bsonType: 'string'},address_zip:{bsonType: 'int'},address_country:{bsonType: 'string'},phone:{bsonType: 'string'},email:{bsonType: 'string'},register_date:{bsonType: 'timestamp'}}},last_shoppings:{bsonType: 'array',items:{title: 'object',required: ['shopping_date'],properties:{glasses:{bsonType: 'object',title: 'object',required: ['brand','prescription','glass_color','frame_type','frame_color','price','seller'],properties:{brand:{bsonType: 'string'},prescription:{bsonType: 'object',title: 'object',required: ['right_eye','left_eye'],properties:{right_eye:{bsonType: 'double'},left_eye:{bsonType: 'double'}}},glass_color:{bsonType: 'object',title: 'object',required: ['right_glass','left_glass'],properties:{right_glass:{bsonType: 'string'},left_glass:{bsonType: 'string'}}},frame_type:{enum: ['rimless', 'metal', 'plastic']},frame_color:{bsonType: 'string'},price:{bsonType: 'double'},seller:{bsonType: 'string'}}},shopping_date:{bsonType: 'timestamp'}}}},referral_id:{bsonType: 'objectId'}}}},autoIndexId: true});