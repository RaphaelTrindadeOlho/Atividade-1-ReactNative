// CÓDIGO COMPLETO PARA O APP DE QUIZ (Arquivo: App.js)

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const PERGUNTAS = [
  {
    pergunta: 'Qual é o componente principal para criar um layout em React Native?',
    opcoes: ['<View>', '<Text>', '<Screen>', '<Container>'],
    respostaCorreta: '<View>',
  },
  {
    pergunta: 'Qual hook é usado para gerenciar estado em um componente funcional?',
    opcoes: ['useEffect', 'useState', 'useContext', 'useReducer'],
    respostaCorreta: 'useState',
  },
  {
    pergunta: 'Qual componente é usado para criar botões clicáveis?',
    opcoes: ['<Button>', '<Clickable>', '<TouchableOpacity>', '<PressView>'],
    respostaCorreta: '<TouchableOpacity>',
  },
  {
    pergunta: 'Como se aplica estilo a um componente em React Native?',
    opcoes: ['Usando CSS', 'Usando a prop `style` com um objeto JavaScript', 'Usando SASS', 'Com a tag <style>'],
    respostaCorreta: 'Usando a prop `style` com um objeto JavaScript',
  },
];

export default function App() {
  const [perguntaAtualIndex, setPerguntaAtualIndex] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarPontuacao, setMostrarPontuacao] = useState(false);

  const handleResposta = (opcaoSelecionada) => {
    if (opcaoSelecionada === PERGUNTAS[perguntaAtualIndex].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaPerguntaIndex = perguntaAtualIndex + 1;
    if (proximaPerguntaIndex < PERGUNTAS.length) {
      setPerguntaAtualIndex(proximaPerguntaIndex);
    } else {
      setMostrarPontuacao(true);
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtualIndex(0);
    setPontuacao(0);
    setMostrarPontuacao(false);
  };

  if (mostrarPontuacao) {
    return (
      <View style={styles.container}>
        <View style={styles.pontuacaoContainer}>
          <Text style={styles.pontuacaoTexto}>
            Você acertou {pontuacao} de {PERGUNTAS.length} perguntas!
          </Text>
          <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarQuiz}>
            <Text style={styles.botaoReiniciarTexto}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.quizContainer}>
        <View style={styles.perguntaHeader}>
          <Text style={styles.perguntaContador}>
            Pergunta {perguntaAtualIndex + 1}/{PERGUNTAS.length}
          </Text>
          <Text style={styles.perguntaTexto}>{PERGUNTAS[perguntaAtualIndex].pergunta}</Text>
        </View>

        <View style={styles.opcoesContainer}>
          {PERGUNTAS[perguntaAtualIndex].opcoes.map((opcao, index) => (
            <TouchableOpacity
              key={index}
              style={styles.opcaoBotao}
              onPress={() => handleResposta(opcao)}
            >
              <Text style={styles.opcaoTexto}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  quizContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  perguntaHeader: {
    marginBottom: 20,
  },
  perguntaContador: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  perguntaTexto: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  opcoesContainer: {
    width: '100%',
  },
  opcaoBotao: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  opcaoTexto: {
    fontSize: 18,
    color: '#333',
  },
  pontuacaoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
  },
  pontuacaoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  botaoReiniciar: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  botaoReiniciarTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});