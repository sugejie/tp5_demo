<?php
namespace app\drg\controller;

use think\Session;

class Index extends Base
{
    public function index()
    {
        $user = Session::get('user');
        // 根据用户权限 查首页数据
        // if ($user['right']==0) {
        // } else if ($user['right']==1) {
        // } else if ($user['right']==2) {
        // } else if ($user['right']==3) {
        // } else if ($user['right']==4) {
        // } else {
        //      $this->redirect('Login/logout');
        // }
        return view();
    }
}
