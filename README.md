# git clone 問題

## react 問題

1. 因 .gitignore 原因所以要 【npm i react-scripts】取得依賴包

## laravel 問題

1. 因 .gitignore 原因所以要 【composer install】取得依賴包
2. 複製【.env.example】名稱改為【.env】修改設定檔
3. 取得 APP_KEY 在終端機輸入【php artisan key:grnerate】

## 目前進度

07/20 帳戶資料的頭像上傳資料還沒完成
login 的 hashpassword 還未匹配 => 先暫時註冊用原密碼

註冊還沒做好

準備要接【allCase】篩選已完成 剩下篩選區的假資料
【UserInfo】的已報價介面要調整
【UserInfo】的 handleBidder 為甚麼需要 win
【CaseRecommend】的 getSimilarCase 缺 classID ，getBidder 缺 userID 無法查看個人資訊
