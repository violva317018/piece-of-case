# git clone 問題

## react 問題

1. 因 .gitignore 原因所以要取得依賴包 
    ```
    npm i react-scripts
    ```

## laravel 問題

1. 因 .gitignore 原因所以要取得依賴包
    ```
    composer install
    ```

2. 複製【.env.example】名稱改為【.env】修改設定檔
    Linux
    ```
    cp .env.example .env ()
    ```
    Windows
    ```
    copy .env.example .env ()
    ```

3. 取得 APP_KEY 在終端機輸入
     ```
    php artisan key:generate
    ```

## 目前進度

07/20 帳戶資料的頭像上傳資料還沒完成

【UserInfo】的已報價介面要調整

0724 測試

0725 剩下【進行中】跟【接案紀錄】【進行中】

0727 【Proposal】剩檔案，【提案紀錄】【草稿修改】資料已傳遞剩【聯絡時段】
0728 【Proposal】的 contactAble 有問題只輸出 0，檔案以已可儲存至 DB
