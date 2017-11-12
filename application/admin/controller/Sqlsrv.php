<?php
namespace app\admin\controller;

use think\Controller;

class Sqlsrv extends Controller
{
    public function index() {
        $res = \think\Db::name('user_info')
            ->select();
        dump($res);
        return ;
    }
}