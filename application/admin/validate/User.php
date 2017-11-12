<?php
namespace app\admin\validate;

use think\Validate;

/**
 * User验证器
 */
class User extends Validate
{
    /**
     * 规则
     */
    protected $rule = [
        'username' => 'require|max:25|unique:user',
        'password' => 'require|length:6,15',
    ];

    /**
     * 提示
     */
    protected $message = [
        'username.require' => '名称必须',
        'username.max'     => '名称最多不能超过25个字符',
        'username.unique'  => '名称已存在',
        'password.require' => '密码必须',
        'password.length'  => '密码长度6~15位',
    ];
}