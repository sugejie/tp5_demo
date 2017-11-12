<?php
namespace app\admin\controller;

use think\Controller;

class Login extends Controller
{
    public function index()
    {
        if (request()->isPost())
        {
            $user = [
                'username' => input('username'),
                'password' => input('password')
            ];
            if(!captcha_check(input('verifyCode'))) {
                //验证失败
                $this->assign('user', $user);
                $this->assign('msg', '验证码错误!');
            } else {
                $res = \think\Db::name('user')
                    ->where('username', $user['username'])
                    ->where('password', $user['password'])
                    ->select();
                if (empty($res)) {
                    $this->assign('user', $user);
                    $this->assign('msg', '登录名或密码错误!');
                } else {
                    return $this->success('登陆成功！正在跳转...', 'Index/index');
                }
            }
        }
        return $this->fetch('login');
    }
}