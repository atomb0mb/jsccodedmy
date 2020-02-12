<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Word Smith</title>
  <link rel="stylesheet" type="text/css" href="public/style.css" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro|Work+Sans:200,500" rel="stylesheet">
</head>

<body>
  <header>
    <img src="https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/wordsmith_logo.svg" class="logo" />

  </header>
  <main id="main">
    <div class="container">

      <h1>Enter a Word</h1>

      <form id="form" autocomplete="off">
        <input type="text" id="input" value="" placeholder="type in a word">

        <input type="text" id="topic" value="" placeholder="type in a topic">
        <button id="submit">SUBMIT</button>
      </form>

      <div id="responseField">

      </div>

    </div>
  </main>
  <script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
  <script src="public/main.js"></script>
  <script src="public/helperFunctions.js"></script>
</body>
</html>
