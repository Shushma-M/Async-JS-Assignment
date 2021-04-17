import "./styles.css";

/*Ex:2*/
const strLength = (name, printLength) => {
  printLength(name.length);
};
const display = (res) => console.log(`OMG!! my name is ${res} character long`);
strLength("shushma", display);

console.log("**************************");

/*Ex 3*/
const killMe = (name, successFunc, failureFunc) => {
  name.length % 2 === 0 ? successFunc() : failureFunc();
};
killMe(
  "Reshma",
  () => console.log("I'm dead"),
  () => console.log("I'm alive")
);
killMe(
  "Shushma",
  () => console.log("I'm dead"),
  () => console.log("I'm alive")
);
console.log("**************************");

/*Ex 4*/
const delayOutput = (msg, delay) => {
  setTimeout(() => console.log(msg), delay);
};
delayOutput("Welcome", 2000);

/*Ex 6a*/
const withInterval = (msg, time) => {
  let myvar = setInterval(() => {
    console.log(msg);
  }, time);
  console.log("var:" + myvar);
};
// withInterval("Shushma",2000);

/*Ex 6b*/
const timeBomb = (counter) => {
  const action = () => {
    console.log(counter);
    counter--;
    if (counter === 0) {
      console.log("bang bang!!");
      clearInterval(id);
    }
  };
  let id = setInterval(action, 1000);
};
//timeBomb(5);

/*Ex 10,11,12:Fake Fetch*/
const fakeFetch = (input, successFlag) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        successFlag
          ? resolve(`output from server:${input}`)
          : reject(`Error from Server:${input}`),
      3000
    );
  });
};
fakeFetch("shush", true)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/*Ex:13: Chaining*/
const getServerResponseLength = (msg) => {
  return fakeFetch(msg, true).then((data) => {
    return data.length;
  });
};

getServerResponseLength("Shush").then((data) => {
  console.log("Length of msg from Server:" + data);
});

/*Ex:14: Waterfall*/
const syncCallsToServer = (msg1, msg2) => {
  return fakeFetch(msg1, true).then((data) => fakeFetch(data + msg2, true));
};
syncCallsToServer("shushma", "chittu").then((data) => console.log(data));

/*Ex:15 - FakeFetch using async await*/
const fethchUsingAwait = async (msg) => {
  try {
    const serverdata = await fakeFetch(msg, true);
    console.log(serverdata);
  } catch (error) {
    console.error(error);
  }
};
fethchUsingAwait("Reshma");

/*Ex:16: Waterfall using async await*/
const syncCallsToServerAwait = async (msg1, msg2) => {
  try {
    const data1 = await fakeFetch(msg1, false);
    const data2 = await fakeFetch(data1 + msg2, true);
    console.log(data2);
  } catch (error) {
    console.error(error);
  }
};
syncCallsToServerAwait("Shush", "Resh");

/*Ex 17: Chaining using async await*/
const getLengthOfServerResponse = async (msg) => {
  try {
    const dataFromServer = await fakeFetch(msg, true);
    console.log(
      "Length of output from server using async await:" + dataFromServer.length
    );
  } catch (error) {
    console.error(error);
  }
};

getLengthOfServerResponse("Shushma");

/*Ex 7*/
export default function App() {
  return (
    <div className="App">
      <h1>Async Assignments</h1>
      <button onClick={(event) => console.log(event.target.innerText)}>
        Shush Box
      </button>
      <div>
        {[
          { id: 1, name: "something" },
          { id: 2, name: "something else" },
          { id: 3, name: "something more" }
        ].map((key) => (
          <ul key={key.id}>
            <li
              onClick={() => {
                console.log(key);
              }}
            >
              {key.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
