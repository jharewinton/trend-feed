package model

import play.api.libs.json.Json

case class ConstituencyCount(name: String, count: Int, onsCode: String)

object ConstituencyCount {

  implicit val jf = Json.format[ConstituencyCount]

}

