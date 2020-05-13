import {Entity, model, property} from '@loopback/repository';

@model()
export class Message extends Entity {
  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'object',
  })
  seenBy?: object;


  constructor(data?: Partial<Message>) {
    super(data);
  }
}

export interface MessageRelations {
  // describe navigational properties here
}

export type MessageWithRelations = Message & MessageRelations;
