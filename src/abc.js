// import { useState, useEffect, useRef } from "react";

// export default function CleanUp() {
//     const [order, setOrder] = useState(false)    // “청소해주세요” (주문)
//     const brush = useRef(false)    // “빗자루”
//     const mop = useRef(false)         // "걸레"
//     const [talk, setTalk] = useState(false)            // “다했어요” (말하기)
//     const [clear, setClear] = useState(false)        // “끝” (종료)

//     // 청소 시작
//     const orderStart = () => {
//         setOrder(true);
//     };
//     // 빗자루 완료 → 말하기
//     const brushDone = () => {
//         brush.current = true;
//         talkBrushmop();
//     };

//     // 걸레 완료 → 말하기
//     const mopDone = () => {
//         mop.current = true;
//         talkBrushmop();
//     };

//     const talkBrushmop = () => {
//         if (brush == true && mop == true) setTalk(true);
//     }

//     // 말하기가 활성화되고, 빗자루와 걸레가 모두 끝났을 경우 "끝" 상태 변경
//     useEffect(() => {
//         if (talk && !brush && !mop) {
//             setClear(true);
//             setTalk(false);
//             brush.current = false;
//             mop.current = false;
//         }
//     }, [talk]);

//     return (
//         <div>
//             <button onClick={orderStart}>청소해주세요</button>
//             <button onClick={brushDone}>빗자루 완료</button>
//             <button onClick={mopDone}>걸레 완료</button>
//             <button onClick={talkBrushmop}>청소 완료</button>
//         </div>
//     );
// }


import { useState } from "react";

const fecthPizza = () => fetch("https://dough.pizza.com/makePizza");

export default function PizzaOrder() {
    const [success, setSuccess] = useState(false);

    const makePizza = async () => {
        try {
            const makeHundredPizza = Array.from({ length: 100 }).map(() => makePizza());
            await Promise.all(makeHundredPizza); // 100개 요청 병렬 실행
            setSuccess(true); // 모든 요청이 성공하면 success 활성화
        } catch (err) {
            console.log("피자 만드는 도중 에러 발생 : ", err);
            
        }
    };

    return (
        <div>
            <h2>피자 주문</h2>
            <p>{loading ? "피자 만드는 중...🍕" : success ? "피자 완성! 🚀" : "대기 중"}</p>
            <button onClick={makePizza} disabled={loading}>
                피자 만들기
            </button>
        </div>
    );
}