#!/bin/bash

redis-cli -u redis://queue XGROUP CREATE streams:notifications notification_listeners $ MKSTREAM