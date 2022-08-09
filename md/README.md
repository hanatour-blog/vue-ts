### 1 주차 과제
---
src/components 하위에 TodoInput, TodoItem 파일이 있습니다.
해당 vue 파일의 부모 컴포넌트는 App.vue 입니다 :)

> https://github.com/hanatour-blog/vue-ts 에서 fork 를 해주시고,
- 개인 브런치 를 생성합니다. 
- 브런치 네이밍은 통일되게 hnt-영문이름 으로 만들어주세요 ! 
    - ex) hnt-shinhyungki

> in memory db 사용 방법은 사전에 java 가 설치되어 있어야 합니다.
- 아래 사이트에서 .dmg파일을 다운받아 실행해서 Java 설치를 진행해주세요 !

https://www.azul.com/downloads/?version=java-11-lts&os=macos&architecture=arm-64-bit&package=jdk#download-openjdk

![image](https://user-images.githubusercontent.com/107032371/183708056-6eaa9972-b0eb-4a4c-a908-2dddba7a80cd.png)

그런다음 terminal 에서 java -version 명령어를 입력하면 아래 이미지 처럼 version 이 출력되면 자바 설치 끝 ! 

![image](https://user-images.githubusercontent.com/107032371/183709604-981c0141-4ec2-477c-8295-294f67c1f8ad.png)

1. 설치가 완료되면 clone 받은 repository 에서 프로젝트를 열어주세요 :)
2. 그런다음 터미널을 켜주시고 $ yarn db 를 입력 해 주세요.
![image](https://user-images.githubusercontent.com/107032371/183708346-f82454b9-b9aa-4e38-9a60-9c986b09e1f2.png)

### 위와 같이 spring 배너가 노출되면 메모리 db 띄우기 성공 ! ( 포트는 9099 입니다 :) )

3. yarn serve 로 프론트도 띄워보자.
![image](https://user-images.githubusercontent.com/107032371/183708585-31284ede-7fcc-4c0b-8f15-3985ff212624.png)

### 이제 과제를 진행 ! 

CRUD 를 만들어 보자.
- [] 할일 입력란 에 할일을 입력후 추가 버튼을 누르면 List 에 할일이 추가되어야 한다
- [] 추가후 입력란 (input) 은 초기화 "" 처리가 되어야 한다.
- [] 추가된 할일 목록중 특정 할일을 선택시 Done (취소선) 기능이 되어야한다.
- [] 삭세 버튼 선택시 선택한 할일이 목록에서 제거되어야 한다.