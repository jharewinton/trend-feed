package model

import play.api.libs.json.Json

case class Petition(name: String, signatureCount: Int, description: String, url: String, constituencyCounts: Seq[ConstituencyCount])

object Petition {

  implicit val jf = Json.format[Petition]
}