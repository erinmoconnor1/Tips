/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTipAdvisor = /* GraphQL */ `
  mutation CreateTipAdvisor(
    $input: CreateTipAdvisorInput!
    $condition: ModelTipAdvisorConditionInput
  ) {
    createTipAdvisor(input: $input, condition: $condition) {
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
export const updateTipAdvisor = /* GraphQL */ `
  mutation UpdateTipAdvisor(
    $input: UpdateTipAdvisorInput!
    $condition: ModelTipAdvisorConditionInput
  ) {
    updateTipAdvisor(input: $input, condition: $condition) {
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
export const deleteTipAdvisor = /* GraphQL */ `
  mutation DeleteTipAdvisor(
    $input: DeleteTipAdvisorInput!
    $condition: ModelTipAdvisorConditionInput
  ) {
    deleteTipAdvisor(input: $input, condition: $condition) {
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
