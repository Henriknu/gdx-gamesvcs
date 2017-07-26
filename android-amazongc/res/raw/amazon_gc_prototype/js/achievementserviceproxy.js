/*! Copyright 2013 Amazon Digital Services, Inc. All rights reserved. */
AchievementServiceProxy=(function(){var a=function(){var b="https://ags-ext.amazon.com/service/achievements/";this["getAchievement"]=function(f,d){console.log("AchievementServiceProxy: getAchievement");var c=$.Deferred();var e={};e.achievementId=f;e.playerId=d;NativeTransport.serviceCall({target:"AchievementsService",method:"getAchievement",guestModeMethod:"getAchievementPublic",httpMethod:"PUT",endPoint:b,args:e}).always(function(h,g){console.log("getAchievement complete: "+JSON.stringify(h));c.resolve(h,g)});return c.promise()};this["getAchievements"]=function(d){console.log("AchievementServiceProxy: getAchievements");var c=$.Deferred();var e={};e.playerId=d;NativeTransport.serviceCall({target:"AchievementsService",method:"getAchievements",guestModeMethod:"getAchievementsPublic",httpMethod:"PUT",endPoint:b,args:e}).always(function(g,f){console.log("getAchievements complete: "+JSON.stringify(g));c.resolve(g,f)});return c.promise()};this["updateAchievementProgress"]=function(f,e){console.log("AchievementServiceProxy: updateAchievementProgress");var c=$.Deferred();var d={};d.achievementId=f;d.progress=e;NativeTransport.serviceCall({target:"AchievementsService",method:"updateAchievementProgress",httpMethod:"PUT",endPoint:b,args:d}).always(function(h,g){console.log("updateAchievementProgress complete: "+JSON.stringify(h));c.resolve(h,g)});return c.promise()};this["loadIcon"]=function(e,c,d){console.log("AchievementServiceProxy: loadIcon")}};return a}());console.log("AchievementServiceProxy loaded.");