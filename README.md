Exercise 08

Make an HTTP request with curl that shows the response headers for this URL: https://jsonplaceholder.typicode.com/posts/1/comments

What is the value of the content-type response header?

---

ANSWER :

Digitare una delle due diciture nel terminale:

curl --verbose https://jsonplaceholder.typicode.com/posts/1/comments
curl -v https://jsonplaceholder.typicode.com/posts/1/comments

content-type value : application/json; charset=utf-8

header:

[
{
"postId": 1,
"id": 1,
"name": "id labore ex et quam laborum",
"email": "Eliseo@gardner.biz",
"body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessit
},
{
"postId": 1,
"id": 2,
"name": "quo vero reiciendis velit similique earum",
"email": "Jayne_Kuhic@sydney.com",
ut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
},
{
"postId": 1,
"id": 4,
"name": "alias odio sit",
"email": "Lew@alysha.tv",
"body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
},
{
"postId": 1,
"id": 5,
"name": "vero eaque aliquid doloribus et culpa",
"email": "Hayden@althea.biz",
"body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
}
]
