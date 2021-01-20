# Node.js란?

Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임

① 먼저 V8 이란 compiles JavaScript directly to native machine code 입니다.

② 쉽게 말해서 자바스크립트 언어를 기계(컴퓨터)가 알아 먹을 수 있게 컴파일을 해준다는 것입니다.

③ 그래서 Chrome V8 은 웹 브라우저를 만드는 데 기반을 제공하는 오픈 소스 자바스크립트 엔진입니다.

④ 런타임은 프로그래밍 언어가 구동되고 있는 환경입니다.

[출처] [Node.js] Node.js 란?|작성자 메로메로

<br/>

### <br/>	1. Non-blocking

- Non-blocking : 이전 작업이 완료될 때까지 대기하지 낳고 다음 작업을 수행함
- Blocking : 이전 작업이 끝나야만 다음 작업을 수행

### <br/>	2. Single-thread

- 노드는 싱글스레드
- 싱글스레드 + 논 블로킹 모델

<br/>

### 	3. REPL

- Read - 유저의 값을 받아들여 Javascript 데이터 구조로 저장
- Eval - 데이터 처리
- Print - 처리결과를 출력
- Loop - 유저가 ^C를 눌러 종료할 때까지 반복

