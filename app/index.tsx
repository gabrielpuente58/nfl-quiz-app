import Ionicons from "@expo/vector-icons/AntDesign";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import questions from "./quizData";

export default function Index() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz Finished!");
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      alert("This is the first question.");
    }
  };

  const handleAnswer = (answer: boolean) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    nextQuestion();
  };

  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          title: "NFL Trivia",
          headerStyle: {
            backgroundColor: "#841584",
          },
          headerTintColor: "#fff",
        }}
      />
      <View style={styles.container}>
        <Text
          style={
            (styles.container,
            { fontSize: 17, padding: 20, textAlign: "center" })
          }
        >
          {questions[currentQuestion].question}
        </Text>
        <View style={styles.trueFalseButtonContiner}>
          <Pressable style={styles.button} onPress={() => handleAnswer(true)}>
            <Text style={{ color: "#fff", fontSize: 20 }}>True</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleAnswer(false)}>
            <Text style={{ color: "#fff", fontSize: 20 }}>False</Text>
          </Pressable>
        </View>
        <View style={styles.prevNextButtonContiner}>
          <Pressable
            style={[
              styles.button,
              { flexDirection: "row", alignItems: "center" },
            ]}
            onPress={previousQuestion}
          >
            <Ionicons
              name="caretleft"
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
            <Text style={{ color: "#fff", fontSize: 20 }}>Prev</Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              { flexDirection: "row", alignItems: "center" },
            ]}
            onPress={nextQuestion}
          >
            <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
            <Ionicons
              name="caretright"
              size={20}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.cheatButton}
            onPress={() => router.push("./cheat-page")}
          >
            <Text style={{ color: "#841584", fontSize: 25 }}>CHEAT</Text>
          </Pressable>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  trueFalseButtonContiner: {
    flexDirection: "row",
    gap: 40,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#841584",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  prevNextButtonContiner: {
    flexDirection: "row",
    gap: 40,
    paddingTop: 40,
  },
  cheatButton: {
    marginTop: 60,
    borderWidth: 2,
    borderColor: "#841584",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});
