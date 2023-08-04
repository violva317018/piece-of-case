import React from 'react';
import back from '../axios/back';
  function Backstage(){
  back.alluser(1)
  .then((result)=> {
    console.log(result['data']);
  });

  return (
    <div>
      {/* 搜尋欄 */}
      <input type="text" placeholder="搜尋案件或使用者" />

      {/* 篩選框 */}
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {/* 條列式所有案件（分頁） */}
      <div>
        {/* Add your list of cases here */}
        {/* You can use map() or any other method to display the cases */}
      </div>
      <button>刪除案件</button>
      <button>改為草稿</button>

      {/* 條例式使用者（分頁） */}
      <div>
        {/* Add your list of users here */}
        {/* You can use map() or any other method to display the users */}
      </div>
      <button>ban使用者</button>
    </div>
  );
  }

export default Backstage;
