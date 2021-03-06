import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  VacinaParamProps,
  VacinaProps,
} from "../../interfaces/Vac.interface";
import ButtonAction from "../ButtonAct";
import {
  VacinaContainer,
  VacinaHeader,
  VacinaList,
  VacinaText,
  VacinaButton,
} from "./style";
import colors from "../../styles/colors";
import Button from "../Button";
import { Alert } from "react-native";

export default function Vacinacao({
  title,
  vacinacao,
  buttonEdit,
  buttonRemove,
  onPress,
  ...rest
}: VacinaProps) {
  const vacinaRemoveAlert = (item: VacinaParamProps) =>
    Alert.alert(
      "Remoção",
      "Tem certeza que deseja remover a vacina cadastrada?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => {
            console.log(item);
            buttonRemove(item);
          },
        },
      ],
      { cancelable: false }
    );
  return (
    <VacinaContainer>
      <VacinaHeader>{title}</VacinaHeader>
      {vacinacao &&
        vacinacao.map((item, index) => (
          <VacinaList key={index}>
            <VacinaText>{item.nome}</VacinaText>
            <VacinaText>{item.data}</VacinaText>
            <VacinaButton>
              <ButtonAction
                type="edit"
                onPress={() => buttonEdit(item)}
                {...rest}
              >
                <FontAwesome name="edit" color={colors.white} />
              </ButtonAction>
              <ButtonAction
                type="remove"
                onPress={() => vacinaRemoveAlert(item)}
                {...rest}
              >
                <FontAwesome name="remove" color={colors.white} />
              </ButtonAction>
            </VacinaButton>
          </VacinaList>
        ))}
      <Button size="define" title="Cadastrar" onPress={onPress} />
    </VacinaContainer>
  );
}