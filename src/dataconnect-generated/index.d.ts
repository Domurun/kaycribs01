import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AgentProfile_Key {
  id: UUIDString;
  __typename?: 'AgentProfile_Key';
}

export interface CreateInquiryData {
  inquiry_insert: Inquiry_Key;
}

export interface CreateInquiryVariables {
  propertyId: UUIDString;
  message: string;
  toAgentId: UUIDString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  email: string;
  userType: string;
}

export interface GetMySavedPropertiesData {
  savedProperties: ({
    property: {
      id: UUIDString;
      address: string;
      price: number;
      propertyType: string;
      status: string;
    } & Property_Key;
  })[];
}

export interface GetPropertiesData {
  properties: ({
    id: UUIDString;
    address: string;
    price: number;
    propertyType: string;
    status: string;
  } & Property_Key)[];
}

export interface Inquiry_Key {
  id: UUIDString;
  __typename?: 'Inquiry_Key';
}

export interface Property_Key {
  id: UUIDString;
  __typename?: 'Property_Key';
}

export interface SavedProperty_Key {
  userId: UUIDString;
  propertyId: UUIDString;
  __typename?: 'SavedProperty_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetPropertiesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPropertiesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPropertiesData, undefined>;
  operationName: string;
}
export const getPropertiesRef: GetPropertiesRef;

export function getProperties(): QueryPromise<GetPropertiesData, undefined>;
export function getProperties(dc: DataConnect): QueryPromise<GetPropertiesData, undefined>;

interface CreateInquiryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInquiryVariables): MutationRef<CreateInquiryData, CreateInquiryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInquiryVariables): MutationRef<CreateInquiryData, CreateInquiryVariables>;
  operationName: string;
}
export const createInquiryRef: CreateInquiryRef;

export function createInquiry(vars: CreateInquiryVariables): MutationPromise<CreateInquiryData, CreateInquiryVariables>;
export function createInquiry(dc: DataConnect, vars: CreateInquiryVariables): MutationPromise<CreateInquiryData, CreateInquiryVariables>;

interface GetMySavedPropertiesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMySavedPropertiesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMySavedPropertiesData, undefined>;
  operationName: string;
}
export const getMySavedPropertiesRef: GetMySavedPropertiesRef;

export function getMySavedProperties(): QueryPromise<GetMySavedPropertiesData, undefined>;
export function getMySavedProperties(dc: DataConnect): QueryPromise<GetMySavedPropertiesData, undefined>;

