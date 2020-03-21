<?php
header('Content-Type: application/json');
print file_get_contents('https://www.sknt.ru/job/frontend/data.json');
