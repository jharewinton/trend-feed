package controllers

import play.api.libs.json.{JsValue, Json}
import services.HTTP

import scala.io.Source

object GvtPetitionsFeed extends HTTP {

  lazy val json = getFeedJson()

  def getFeedJson(): JsValue = {
    Json.parse(Source.fromURL("https://petition.parliament.uk/petitions.json?state=open").mkString)
  }

}
