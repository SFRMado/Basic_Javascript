<?php
    $halalmart = array(
        'kd_barang' => array(1, 2, 3),
        'nama_barang' => array('Piscok', 'Donat Salju', 'Ice Tea'),
        'harga' => array('Rp 1.500', 'Rp 2.000', 'Rp 3.000')
    );
    echo "kd barang || nama barang || Harga \n";
    echo $halalmart ['kd_barang'][0], " || ", $halalmart ['nama_barang'][0], " || ", $halalmart ['harga'][0], "\n";
    echo $halalmart ['kd_barang'][1], " || ", $halalmart ['nama_barang'][1], " || ", $halalmart ['harga'][1], "\n";
    echo $halalmart ['kd_barang'][2], " || ", $halalmart ['nama_barang'][2], " || ", $halalmart ['harga'][2], "\n";
?>