const quotes = [
  {
    quote:
      "산다는 게 나만 힘든게 아니다. 모두다 힘들고 막막하고 그러하지만 살아가는 것이다.",
    author: "디에이드",
  },
  {
    quote: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤 스타인",
  },
  {
    quote: "이 또한 지나가리라.",
    author: "랜터 윌슨 스미스",
  },
  {
    quote:
      "미래를 향해 달려가 부딪혀라. 그렇지 않으면 미래가 달려와 너를 덮칠 것이다.",
    author: "안토지 J. 단젤로",
  },
  {
    quote:
      "길을 가다가 돌을 만나면, 강자는 그것을 디딤돌이라 하며, 약자는 그것을 걸림돌이라고 한다.",
    author: "토마스 칼라일",
  },
  {
    quote:
      "세상의 중요한 업적 중 대부분은, 희망이 보이지 않는 상황에서도 끊임없이 도전한 사람들이 이룬 것이다.",
    author: "데일 카네기",
  },
  {
    quote: "공부 없이 하는 투자는 패도 보지 않고 치는 포커와 같다.",
    author: "피터 린치",
  },
  {
    quote:
      "비관론자는 기회가 와도 위기만 보고 낙관론자는 위기가 와도 기회만 찾는다.",
    author: "윈스턴 처칠",
  },
  {
    quote:
      "자신을 믿지 않으면 아무것도 할 수 없다. 일이 안 풀릴 때 생기는 불안함까지 신뢰하라.",
    author: "샤론 샐즈버그",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `[${todaysQuote.author}]`;
