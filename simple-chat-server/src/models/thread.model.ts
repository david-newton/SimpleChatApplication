import {Entity, model, property} from '@loopback/repository';

@model()
export class Thread extends Entity {
  @property({
    type: 'date',
  })
  lastUpdated?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  users?: string[];


  constructor(data?: Partial<Thread>) {
    super(data);
  }
}

export interface ThreadRelations {
  // describe navigational properties here
}

export type ThreadWithRelations = Thread & ThreadRelations;
