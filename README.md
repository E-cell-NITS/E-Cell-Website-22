# Official website of E-Cell NIT Silchar
## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

E-Cell, NIT Silchar is a non-profit student-run organization promoting and nurturing the entrepreneurial spirit among students. It offers pre-incubation facilities to startups and encourages students to work on their ideas through events. E-Cell ' s mission is to improve the culture of entrepreneurship in technical and non-technical fields and uplift students to innovate and develop their models. Its objective is to develop the spirit of entrepreneurship by providing various programs and events such as Srijan to educate students on financial literacy, real-world problem-solving skills, and event management.
## Getting Started

If you're new to this project, follow these steps to get started:

1. Clone the `vite_newdev` branch
  


2. Start contributing by following our [Contribution Guidelines](https://github.com/Ecell-NITS/e-cell-website-22/blob/vite_newdev/CONTRIBUTING.md).

## Contributing

We welcome contributions from the community! Whether you're interested in fixing bugs, improving documentation, or adding new features, please read our [Contribution Guidelines](https://github.com/Ecell-NITS/e-cell-website-22/blob/vite_newdev/CONTRIBUTING.md) before you begin.

By participating in this project, you agree to abide by our Code of Conduct.

## License

This project is licensed under the [GNU GENERAL PUBLIC LICENSE](https://github.com/Ecell-NITS/e-cell-website-22/blob/vite_newdev/LICENSE) - see the [LICENSE.md](https://github.com/Ecell-NITS/e-cell-website-22/blob/vite_newdev/LICENSE) file for details.

## Contact
In case of any query, please contact [mdekaa](https://github.com/mdekaa) or [31adityakumar](https://github.com/31adityakumar)

# E-cell Website API 

 

A brief description of what this project does and who it's for 

 

## Run Locally 

 

Clone the project 

 

```bash 

  git clone https://github.com/Ecell-NITS/e-cell-website-22-api.git 

``` 

 

Go to the project directory 

 

```bash 

  cd e-cell-website-22-api 

``` 

 

Install dependencies 

 

```bash 

  pnpm i 

``` 

 

Start the development server 

 

```bash 

  pnpm dev 

``` 

 

## API Reference 

 

`Home route` 

 

```http 

  GET / 

``` 

 

**Description:** create account of the user 

 

**Response:** 

 

```bash 

    Welcome to E-Cell website Backend API. Developed by E-Cell Tech Team. 

``` 

 

`Signup route` 

 

```http   

  POST /signup 

``` 

 

**Description:** create account of the user 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

| `password` | `string` | **Required**. A password that you can remember | 

 

`Login route` 

 

```http 

  POST /signup 

``` 

 

**Description:** login to user account 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `username` | `string` | **Required**. user name | 

| `email` | `string` | **Required**. Email for account creation | 

| `password` | `string` | **Required**. A password that you can remember | 

 

`add route` 

 

```http   

  POST /add 

``` 

 

**Description:** Add new event 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

| `password` | `string` | **Required**. A password that you can remember | 

 

`fetch route` 

 

```http   

  GET /fetch 

``` 

 

**Description:** Allows users to fetch all events stored in the system 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

 

`dashboard route` 

 

```http   

  GET /dashboard 

``` 

 

**Description:** Fetch details of the user 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

| `bio` | `string` | **Required**. bio for dashboard | 

| `userimg` | `string` | **Required**. user image for dashboard | 

| `facebook` | `string` | **Required**. facebook account link | 

| `github` | `string` | **Required**. github account link | 

| `linkedin` | `string` | **Required**. linkedin account link | 

| `instagram` | `string` | **Required**. instagram account link | 

 

`fetchProfile route` 

 

```http   

  GET /fetchProfile 

``` 

 

**Description:** Fetch details like name, bio, userimg, email_id of a user 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

| `bio` | `string` | **Required**. bio for dashboard | 

| `userimg` | `string` | **Required**. user image for dashboard | 

 

`editProfile route` 

 

```http   

  PUT /editProfile 

``` 

 

**Description:** Edit the profile of a user 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

| `bio` | `string` | **Required**. bio for dashboard | 

| `userimg` | `string` | **Required**. user image for dashboard | 

 

`forgotPwd route` 

 

```http   

  POST /forgotPwd 

``` 

 

**Description:** Take email and send otp to reset the password 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Email for account creation | 

 

`verifyOtpResetPwd route` 

 

```http   

  POST /verifyOtpResetPwd 

``` 

 

**Description:** Verify the otp send to user 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `otp` | `string` | **Required**. one time password  | 

 

`changingPwd route` 

 

```http   

  PUT /changingPwd 

``` 

 

**Description:** Allow users to reset/ change their password 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `oldPassword` | `string` | **Required**. Old password | 

| `newPassword` | `string` | **Required**. A new password that you can remember | 

| `confirmPassword` | `string` | **Required**. Confirm new password that you reset | 

 

`deleteAccount route` 

 

```http   

  POST /deleteAccount 

``` 

 

**Description:** Flag the account for deletion. Once flagged, the user cannot log in anymore. 

 

`publicProfile route` 

 

```http   

  GET /publicProfile 

``` 

 

**Description:** Fetches the public profile of a user using their unique identifier 

 

`getUser route` 

 

```http   

  POST /getUser 

``` 

 

**Description:** Admin-only route to fetch all users. 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `listOfUsers` | `string` | **Required**. Enter list of users  | 

 

`getNewSletters route` 

 

```http   

  POST /getNewSletters 

``` 

 

**Description:** Admin-only route to get all newsletter subscriptions 

 

`createUser route` 

 

```http   

  POST /createUser 

``` 

 

**Description:** route to create new user 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

| `password` | `string` | **Required**. A password that you can remember | 

 

`sendQuery route` 

 

```http   

  POST /sendQuery 

``` 

 

**Description:** route to contact us 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `name` | `string` | **Required**. Full name | 

| `email` | `string` | **Required**. Email for account creation | 

| `message` | `string` | **Required**. Enter a message | 

 

`getQuery route` 

 

```http   

  POST /getQuery 

``` 

 

**Description:** route for the query 

 

`checkEmail route` 

 

```http   

  POST /checkEmail 

``` 

 

**Description:** route to check email 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Email for account creation | 

 

`send-otp route` 

 

```http   

  POST /send-otp 

``` 

 

**Description:** route to send-otp 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Email for account creation | 

| `otp` | `string` | **Required**. Enter one time password | 

 

`verify-otp route` 

 

```http   

  POST /verify-otp 

``` 

 

**Description:** route to verify otp 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Email for account creation | 

 

`getblogs route` 

 

```http   

  GET /getblogs 

``` 

 

**Description:** Get blogs details 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `title` | `string` | **Required**. Enter title | 

| `tag` | `string` | **Required**. Enter tag | 

| `intro` | `string` | **Required**. Enter intro | 

| `content` | `string` | **Required**. Enter content | 

| `writerName` | `string` | **Required**. Enter name | 

| `writerIntro` | `string` | **Required**. Enter writers intro | 

| `writerPic` | `img` | **Required**. Give writers picture | 

| `timeStamp` | `string` | **Required**. Enter time stamp | 

| `topicPic` | `img` | **Required**. Enter topics picture | 

| `writerEmail` | `string` | **Required**. Enter writers email | 

 

`getblogs:Id route` 

 

```http   

``` 

 

**Description:** Get blog Id 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `blogId` | `string` | **Required**. Enter blog id | 

 

`acceptedBlogs route` 

 

```http   

``` 

 

**Description:** Accepted blogs 

 

`publishBlog:Id route` 

 

```http   

``` 

 

**Description:** Get blogs details 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `blogId` | `string` | **Required**. Enter blog id | 

| `email` | `string` | **Required**. Enter email id | 

| `writerName` | `string` | **Required**. Enter writers name | 

| `subject` | `string` | **Required**. Enter subject name | 

| `text` | `string` | **Required**. Enter text | 

 

`deleteBlog:Id route` 

 

```http  

  DELETE /deleteBlog:Id 

``` 

 

**Description:** Delete blog 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `blogId` | `string` | **Required**. Enter blog id | 

| `email` | `string` | **Required**. Enter email id | 

| `writerName` | `string` | **Required**. Enter writers name | 

 

`editBlog:blogId route` 

 

```http  

  PUT /editBlog:blogId 

``` 

 

**Description:** edit blog 

 

`createBlog route` 

 

```http  

  POST /createBlog  

``` 

 

**Description:** Create blog 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Enter email id | 

| `subject` | `string` | **Required**. Enter subject name | 

| `text` | `string` | **Required**. Enter text | 

 

`myPublishedBlogs route` 

 

```http  

  GET /myPublishedBlogs  

``` 

 

**Description:** Create blog 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Enter email id | 

 

`publicWrittenBlog:authoruniqueid route` 

 

```http   

``` 

`tagSpecificBlogList:tagName route` 

 

```http  

  GET /tagSpecificBlogList:tagName 

``` 

`apiBlogs:blogId route` 

 

```http   

  POST /apiBlogs:blogId 

``` 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `title` | `string` | **Required**. Enter title | 

| `tag` | `string` | **Required**. Enter tag | 

| `intro` | `string` | **Required**. Enter intro | 

| `content` | `string` | **Required**. Enter content | 

| `topicPic` | `img` | **Required**. Enter topics picture | 

| `writerName` | `string` | **Required**. Enter name | 

| `writerIntro` | `string` | **Required**. Enter writers intro | 

| `writerPic` | `img` | **Required**. Give writers picture | 

| `writerEmail` | `string` | **Required**. Enter writers email | 

 

`apiComment:postId route` 

 

```http   

  GET /apiComment:postId 

``` 

`apicomment:Id route` 

 

```http   

  POST /apicomment:Id 

``` 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `commentAuthor` | `string` | **Required**. Enter comment to author | 

| `commentPic` | `string` | **Required**. Enter comment picture | 

| `text` | `string` | **Required**. Enter text | 

| `userId` | `string` | **Required**. Enter user id | 

 

`allAccounts route` 

 

```http   

  GET /allAccounts 

``` 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Email for account creation | 

| `password` | `string` | **Required**. A password that you can remember | 

| `bio` | `string` | **Required**. bio for dashboard | 

| `userimg` | `string` | **Required**. user image for dashboard | 

| `facebook` | `string` | **Required**. facebook account link | 

| `github` | `string` | **Required**. github account link | 

| `linkedin` | `string` | **Required**. linkedin account link | 

| `instagram` | `string` | **Required**. instagram account link | 

| `role` | `string` | **Required**. Enter the role  | 

| `deleteAccount` | `string` | **Required**. Delete account | 

 

`makeadmin:email route` 

 

```http   

  GET /makeadmin:email 

``` 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Email for account creation | 

 

``makeclient:email route` 

 

```http   

  GET /`makeclient:email 

``` 

 

| Parameter | Type     | Description                | 

| :-------- | :------- | :------------------------- | 

| `email` | `string` | **Required**. Email for account creation | 

 

## Environment Variables 

 

To run this project, you will need to add the following environment variables to your .env file 

 

`EMAIL_ECELL`=`Email address for sending mails` 

 

`EMAIL_PWD_ECELL`=`password for email service` 

 

`MONGODBSECRET`=`mongodb+srv://username:password@cluster0.gfrng.mongodb.net/db_name` 

 

`NODE_VERSION`= `v18.x` 

 

`YOUR_SECRET_KEY`=`A strong secret key for user authentication` 

 