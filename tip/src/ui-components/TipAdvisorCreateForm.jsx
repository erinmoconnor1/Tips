/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTipAdvisor } from "../graphql/mutations";
const client = generateClient();
export default function TipAdvisorCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Date: "",
    Employees: "",
    FRIENDLINESS_ATTITUDE: "",
    TIMELINESS_OF_SERVICE: "",
    TABLE_MAINT: "",
    DINING_EXP: "",
    totalCost: "",
    totalTip: "",
  };
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Employees, setEmployees] = React.useState(initialValues.Employees);
  const [FRIENDLINESS_ATTITUDE, setFRIENDLINESS_ATTITUDE] = React.useState(
    initialValues.FRIENDLINESS_ATTITUDE
  );
  const [TIMELINESS_OF_SERVICE, setTIMELINESS_OF_SERVICE] = React.useState(
    initialValues.TIMELINESS_OF_SERVICE
  );
  const [TABLE_MAINT, setTABLE_MAINT] = React.useState(
    initialValues.TABLE_MAINT
  );
  const [DINING_EXP, setDINING_EXP] = React.useState(initialValues.DINING_EXP);
  const [totalCost, setTotalCost] = React.useState(initialValues.totalCost);
  const [totalTip, setTotalTip] = React.useState(initialValues.totalTip);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDate(initialValues.Date);
    setEmployees(initialValues.Employees);
    setFRIENDLINESS_ATTITUDE(initialValues.FRIENDLINESS_ATTITUDE);
    setTIMELINESS_OF_SERVICE(initialValues.TIMELINESS_OF_SERVICE);
    setTABLE_MAINT(initialValues.TABLE_MAINT);
    setDINING_EXP(initialValues.DINING_EXP);
    setTotalCost(initialValues.totalCost);
    setTotalTip(initialValues.totalTip);
    setErrors({});
  };
  const validations = {
    Date: [],
    Employees: [],
    FRIENDLINESS_ATTITUDE: [],
    TIMELINESS_OF_SERVICE: [],
    TABLE_MAINT: [],
    DINING_EXP: [],
    totalCost: [],
    totalTip: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Date,
          Employees,
          FRIENDLINESS_ATTITUDE,
          TIMELINESS_OF_SERVICE,
          TABLE_MAINT,
          DINING_EXP,
          totalCost,
          totalTip,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createTipAdvisor.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TipAdvisorCreateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date: value,
              Employees,
              FRIENDLINESS_ATTITUDE,
              TIMELINESS_OF_SERVICE,
              TABLE_MAINT,
              DINING_EXP,
              totalCost,
              totalTip,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <TextField
        label="Employees"
        isRequired={false}
        isReadOnly={false}
        value={Employees}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Employees: value,
              FRIENDLINESS_ATTITUDE,
              TIMELINESS_OF_SERVICE,
              TABLE_MAINT,
              DINING_EXP,
              totalCost,
              totalTip,
            };
            const result = onChange(modelFields);
            value = result?.Employees ?? value;
          }
          if (errors.Employees?.hasError) {
            runValidationTasks("Employees", value);
          }
          setEmployees(value);
        }}
        onBlur={() => runValidationTasks("Employees", Employees)}
        errorMessage={errors.Employees?.errorMessage}
        hasError={errors.Employees?.hasError}
        {...getOverrideProps(overrides, "Employees")}
      ></TextField>
      <TextField
        label="Friendliness attitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={FRIENDLINESS_ATTITUDE}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Date,
              Employees,
              FRIENDLINESS_ATTITUDE: value,
              TIMELINESS_OF_SERVICE,
              TABLE_MAINT,
              DINING_EXP,
              totalCost,
              totalTip,
            };
            const result = onChange(modelFields);
            value = result?.FRIENDLINESS_ATTITUDE ?? value;
          }
          if (errors.FRIENDLINESS_ATTITUDE?.hasError) {
            runValidationTasks("FRIENDLINESS_ATTITUDE", value);
          }
          setFRIENDLINESS_ATTITUDE(value);
        }}
        onBlur={() =>
          runValidationTasks("FRIENDLINESS_ATTITUDE", FRIENDLINESS_ATTITUDE)
        }
        errorMessage={errors.FRIENDLINESS_ATTITUDE?.errorMessage}
        hasError={errors.FRIENDLINESS_ATTITUDE?.hasError}
        {...getOverrideProps(overrides, "FRIENDLINESS_ATTITUDE")}
      ></TextField>
      <TextField
        label="Timeliness of service"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TIMELINESS_OF_SERVICE}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Date,
              Employees,
              FRIENDLINESS_ATTITUDE,
              TIMELINESS_OF_SERVICE: value,
              TABLE_MAINT,
              DINING_EXP,
              totalCost,
              totalTip,
            };
            const result = onChange(modelFields);
            value = result?.TIMELINESS_OF_SERVICE ?? value;
          }
          if (errors.TIMELINESS_OF_SERVICE?.hasError) {
            runValidationTasks("TIMELINESS_OF_SERVICE", value);
          }
          setTIMELINESS_OF_SERVICE(value);
        }}
        onBlur={() =>
          runValidationTasks("TIMELINESS_OF_SERVICE", TIMELINESS_OF_SERVICE)
        }
        errorMessage={errors.TIMELINESS_OF_SERVICE?.errorMessage}
        hasError={errors.TIMELINESS_OF_SERVICE?.hasError}
        {...getOverrideProps(overrides, "TIMELINESS_OF_SERVICE")}
      ></TextField>
      <TextField
        label="Table maint"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TABLE_MAINT}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Date,
              Employees,
              FRIENDLINESS_ATTITUDE,
              TIMELINESS_OF_SERVICE,
              TABLE_MAINT: value,
              DINING_EXP,
              totalCost,
              totalTip,
            };
            const result = onChange(modelFields);
            value = result?.TABLE_MAINT ?? value;
          }
          if (errors.TABLE_MAINT?.hasError) {
            runValidationTasks("TABLE_MAINT", value);
          }
          setTABLE_MAINT(value);
        }}
        onBlur={() => runValidationTasks("TABLE_MAINT", TABLE_MAINT)}
        errorMessage={errors.TABLE_MAINT?.errorMessage}
        hasError={errors.TABLE_MAINT?.hasError}
        {...getOverrideProps(overrides, "TABLE_MAINT")}
      ></TextField>
      <TextField
        label="Dining exp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={DINING_EXP}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Date,
              Employees,
              FRIENDLINESS_ATTITUDE,
              TIMELINESS_OF_SERVICE,
              TABLE_MAINT,
              DINING_EXP: value,
              totalCost,
              totalTip,
            };
            const result = onChange(modelFields);
            value = result?.DINING_EXP ?? value;
          }
          if (errors.DINING_EXP?.hasError) {
            runValidationTasks("DINING_EXP", value);
          }
          setDINING_EXP(value);
        }}
        onBlur={() => runValidationTasks("DINING_EXP", DINING_EXP)}
        errorMessage={errors.DINING_EXP?.errorMessage}
        hasError={errors.DINING_EXP?.hasError}
        {...getOverrideProps(overrides, "DINING_EXP")}
      ></TextField>
      <TextField
        label="Total cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalCost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Date,
              Employees,
              FRIENDLINESS_ATTITUDE,
              TIMELINESS_OF_SERVICE,
              TABLE_MAINT,
              DINING_EXP,
              totalCost: value,
              totalTip,
            };
            const result = onChange(modelFields);
            value = result?.totalCost ?? value;
          }
          if (errors.totalCost?.hasError) {
            runValidationTasks("totalCost", value);
          }
          setTotalCost(value);
        }}
        onBlur={() => runValidationTasks("totalCost", totalCost)}
        errorMessage={errors.totalCost?.errorMessage}
        hasError={errors.totalCost?.hasError}
        {...getOverrideProps(overrides, "totalCost")}
      ></TextField>
      <TextField
        label="Total tip"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalTip}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Date,
              Employees,
              FRIENDLINESS_ATTITUDE,
              TIMELINESS_OF_SERVICE,
              TABLE_MAINT,
              DINING_EXP,
              totalCost,
              totalTip: value,
            };
            const result = onChange(modelFields);
            value = result?.totalTip ?? value;
          }
          if (errors.totalTip?.hasError) {
            runValidationTasks("totalTip", value);
          }
          setTotalTip(value);
        }}
        onBlur={() => runValidationTasks("totalTip", totalTip)}
        errorMessage={errors.totalTip?.errorMessage}
        hasError={errors.totalTip?.hasError}
        {...getOverrideProps(overrides, "totalTip")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
