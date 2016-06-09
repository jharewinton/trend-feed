package controllers

import model.{ConstituencyCount, Petition}
import play.api.libs.json._

import scala.io.Source

object GvtPetitionsFeed {

  def getFeedJson(): JsValue = {
    Json.parse(Source.fromURL("https://petition.parliament.uk/petitions.json?state=open").mkString)
  }

  def createPetition(jsValue: JsValue): Petition = {
    val attributes = jsValue \ "attributes"
    val name = (attributes \ "action").get.as[String]
    val sigCount = (attributes \ "signature_count").get.as[Int]
    val description = (attributes \ "background").get.as[String]
    val url = (jsValue \ "links" \ "self").get.as[String]

    val fullData = Json.parse(Source.fromURL(url).mkString)

    Petition(name, sigCount, description, url, getConstituencyCounts(fullData))
  }

  def getPetitions():Seq[Petition] = {
    getFeedJson() \ "data" match {
      case JsDefined(JsArray(array)) => array.map(createPetition)
      case _ => throw new Exception
    }
  }

  def getConstituencyCounts(jsValue: JsValue): Seq[ConstituencyCount] = {
    jsValue \ "data" \ "attributes" \ "signatures_by_constituency" match {
      case JsDefined(JsArray(array)) => array.map(createConstituencyCount)
      case _ => throw new Exception
    }
  }

  def createConstituencyCount(jsValue: JsValue): ConstituencyCount = {
    val name = (jsValue \ "name").get.as[String]
    val count = (jsValue \ "signature_count").get.as[Int]
    ConstituencyCount(name, count)
  }



}
