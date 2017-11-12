<?php
//配置文件
return [
    'session'  => [
        // SESSION 前缀
        'prefix'         => 'drgs_',
        // 过期时间 默认30min
        // 'expire'         => 1800,
        // 驱动方式 支持redis memcache memcached
        'type'           => '',
        // 是否自动开启 SESSION
        'auto_start'     => true,
    ],
    'view_replace_str'  =>  [
        '__PUBLIC__'     => '/drgs/public/',
        '__RES__'        => '/drgs/public/static/drg/',
        '__ROOT__'       => '/',
    ],
];