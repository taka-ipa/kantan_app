<?php
$correctAnswer = 'B';

//回答を選択したら$userAnswerに代入する
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $userAnswer = $_POST["choice"];

//$userAnswerに変数がセットされている場合
    if (isset($userAnswer)) {
        echo '<p>あなたの回答: ' . $userAnswer . '</p>';
        echo '<p>正解: ' . $correctAnswer . '</p>';
        
        if ($userAnswer === $correctAnswer) {
            echo '<p>正解です！</p>';
        } else {
            echo '<p>不正解です。</p>';
        }
        
        // 2問目を出題するリンク
        echo '<a href="question2.php">次の質問へ進む</a>';
    } else {
        // 質問1ページにリダイレクト
        header('Location: question1.php');
    }
}
?>

