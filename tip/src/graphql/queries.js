/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTipAdvisor = /* GraphQL */ `
  query GetTipAdvisor($id: ID!) {
    getTipAdvisor(id: $id) {
      id
      Date
      Employees
      FRIENDLINESS_ATTITUDE
      TIMELINESS_OF_SERVICE
      TABLE_MAINT
      DINING_EXP
      totalCost
      totalTip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTipAdvisors = /* GraphQL */ `
  query ListTipAdvisors(
    $filter: ModelTipAdvisorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTipAdvisors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Date
        Employees
        FRIENDLINESS_ATTITUDE
        TIMELINESS_OF_SERVICE
        TABLE_MAINT
        DINING_EXP
        totalCost
        totalTip
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
