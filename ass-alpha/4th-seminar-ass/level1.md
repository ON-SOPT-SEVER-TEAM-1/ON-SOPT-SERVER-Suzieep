# 데이터베이스 테이블 설계해보기

## User_table
- User_id [ PK ]<br>
- name<br>
- email<br>
- password<br>
- salt<br>

## Post_table
- Post_id [ PK ]<br>
- author [ FK ] (User_table의 User_id)<br>
- title <br>
- contents<br>
- createAt<br>
- updatedAt<br>

## Like_table
- Post_id [ FK / PK ] (Post_table의 Post_id)<br>
- User_id [ FK / PK ] (User_table의 User_id)
